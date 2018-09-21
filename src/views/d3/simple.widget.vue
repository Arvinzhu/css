<template>
<section>
  <div class="control-group">
    <button @click="change()">Change</button>
  </div>
  <svg id="topo-board" width="800" height="1200"></svg>
  <div id="simpleWidget"></div>
  <div id="warpper"></div>
  <div id="warpper2"></div>
  <div class="control-group">
    <button @click="select('Retail')">Retail</button>
    <button @click="select('Gas')">Gas</button>
    <button @click="select('Dining')">Dining</button>
  </div>
</section>
</template>
<script>
import * as d3 from 'd3'
import './css/style.css'
export default {
  data() {
    return {
      barData: [10, 15, 30, 50, 80, 65, 55, 30, 20, 10, 8], // <-A
      barCount: 0,
      barData2: [
        { width: 10, color: 23 }, { width: 15, color: 33 },
        { width: 30, color: 40 }, { width: 50, color: 60 },
        { width: 80, color: 22 }, { width: 65, color: 10 },
        { width: 55, color: 5 }, { width: 30, color: 30 },
        { width: 20, color: 60 }, { width: 10, color: 90 },
        { width: 8, color: 10 }],
      filterData: [{expense: 10, category: 'Retail'}, {expense: 15, category: 'Gas'}, {expense: 30, category: 'Retail'}, {expense: 50, category: 'Dining'}, {expense: 80, category: 'Gas'}, {expense: 65, category: 'Retail'}, {expense: 55, category: 'Gas'}, {expense: 30, category: 'Dining'}, {expense: 20, category: 'Retail'}, {expense: 10, category: 'Dining'}, {expense: 8, category: 'Gas'}],
      curvePath: null
    }
  },
  mounted() {
    // this.drawWight()
    // this.renderBar(this.barData2)
    // this.intervalBar(this.barData2)
    // this.renderCategory(this.filterData, '')
    this.drawBezier({x: 50, y: 50}, {x: 150, y: 150})
  },
  methods: {
    drawWight() {
      const widget = this.simpleWidget({color: '#6495ed'}).headline('Simple Widget').description('Thisisasimplewidgetdemonstratingfunctionaljavascript.')
      widget.render()
    },
    simpleWidget(spec) {
      const instance = {}
      let headline, description
      instance.render = () => {
        const div1 = d3.select('#simpleWidget').append('div')
        div1.append('h3').text(headline)
        div1.attr('class', 'box').attr('style', 'color:' + spec.color)
        .append('p').text(description)
        return instance
      }
      instance.headline = (h) => {
        if (!arguments.length) {
          h = 'default header'
        }
        headline = h
        return instance
      }
      instance.description = (d) => {
        if (!arguments.length) {
          d = 'default description'
        }
        description = d
        return instance
      }
      return instance
    },
    renderBar(data) {
      // enter
      const colorScale = d3.scaleLinear().domain([10, 100]).range(['brown', 'steelblue'])
      // console.log('enter', d3.select('#warpper').selectAll('div.h-bar'))
      d3.select('#warpper').selectAll('div.h-bar').data(data)
      .enter()
        .append('div')
        .attr('class', 'h-bar')
        .append('span')

      // update
      // console.log('update', d3.select('#warpper').selectAll('div.h-bar'))
      d3.select('#warpper').selectAll('div.h-bar')
      .data(data)
      .exit().remove()
      // exit
      d3.select('#warpper').selectAll('div.h-bar').data(data)
      .attr('class', 'h-bar')
      .style('width', (d) => {
        return (d.width * 3) + 'px'
      })
      .style('background-color', (d) => {
        return colorScale(d.color)
      })
      .select('span')
        .text((d) => {
          // console.log('d:', d, ' i:', i)
          return d.width // + i * 3
        })
    },
    intervalBar(data) {
      const _this = this
      const itval = setInterval(() => {
        if (_this.barCount > 10) {
          clearInterval(itval)
        }
        data.shift()
        data.push({width: Math.round(Math.random() * 100), color: Math.round(Math.random() * 100)})
        _this.barCount++
        _this.renderBar(data)
      }, 1500)
    },
    renderCategory(data, category) {
      d3.select('#warpper2').selectAll('div.h-bar')
      .data(data)
      .enter()
      .append('div')
      .attr('class', 'h-bar')
      .append('span')

      d3.select('#warpper2').selectAll('div.h-bar')
      .data(data)
      .exit().remove()

      d3.select('#warpper2').selectAll('div.h-bar')
      .data(data)
      .attr('class', 'h-bar')
      .style('width', function(d) {
        return (d.expense * 5) + 'px'
      })
      .select('span')
      .text((d) => {
        return d.category
      })
      d3.select('#warpper2').selectAll('div.h-bar')
      .filter((d, i) => {
        return d.category === category
      })
      .classed('selected', true)
    },
    select(category) {
      this.renderCategory(this.filterData, category)
    },
    drawBezier(point1, point2) {
      const start = {x: 20, y: 20}
      const end = {x: 200, y: 200}
      const path = d3.path()
      path.moveTo(start.x, start.y)
      path.bezierCurveTo(point1.x, point1.y, point2.x, point2.y, end.x, end.y)
      this.curvePath = d3.select('#topo-board').append('path').attr('class', 'line').lower()
      this.curvePath.attr('d', path)
    },
    change() {
      const point1 = {
        x: Math.round(Math.random() * 200),
        y: Math.round(Math.random() * 200)
      }
      const point2 = {
        x: Math.round(Math.random() * 200),
        y: Math.round(Math.random() * 200)
      }
      d3.select('#topo-board').selectAll('path').remove()
      this.drawBezier(point1, point2)
    }
  }
}
</script>
<style lang="scss" scoped>
.bar rect {
  fill: steelblue;
}

.bar text {
  fill: #fff;
  font: 10px sans-serif;
}
.line {
  fill: none;
  stroke: #999;
  stroke-width: 3px;

  &.active {
    stroke: #ff7f0e;
  }
}
</style>
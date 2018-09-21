import http from './index'

export default {
  getRuleList (params = {}) {
    return http.post(`/rules/list`, params)
  },
  getRuleByPrimaryKey (ruleId) {
    return http.get(`/rules/detail/${ruleId}`)
  },
  deleteRuleByPrimaryKey (ruleId) {
    return http.get(`/rules/delete/${ruleId}`)
  },
  createRule (params = {}) {
    return http.post(`/rules/insert`, params)
  },
  getRuleStatus (params = {}) {
    return http.post(`/rules/status`, params)
  },
  stopRule (params = {}) {
    return http.post(`/rules/stop`, params)
  },
  startRule (params = {}) {
    return http.post(`/rules/start`, params)
  },
  sendTestSQL (params = {}) {
    return http.post(`/rules/sendsql`, params)
  },
  getSQLTestResult (params = {}) {
    return http.post(`/rules/sqlresult`, params)
  }
}

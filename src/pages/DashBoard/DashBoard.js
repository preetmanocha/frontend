import React from 'react'
import { connect } from 'dva'
import { Table, Button, Modal } from 'antd'

import { CompanyIcon, TableToolBar } from 'components'
import NewJobForm from './NewJobForm'

import styles from './index.less'

@connect(({ dashboard, app }) => ({ dashboard, app }))
class DashBoard extends React.PureComponent {
  onToggleNewJobForm = () => {
    const { dispatch } = this.props
    dispatch({ type: 'dashboard/toggleNewJobForm' })
  }

  render() {
    const { dashboard } = this.props
    const columns = [{
      title: '#',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    }, {
      title: 'Job Title',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: 'Application Date',
      key: 'date',
      dataIndex: 'date',
    }, {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: status => <span>{status}</span>,
    }, {
      title: 'Source',
      key: 'source',
      dataIndex: 'source',
      render: source => <CompanyIcon name={source} />,
    }, {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: () => <Button icon="edit" type="primary" onClick={this.onToggleNewJobForm} />,
    }]

    const addTool = {
      label: 'Add new job card',
      render: () => <Button icon="edit" type="primary" onClick={this.onToggleNewJobForm} />,

    }
    return (
      <div>
        <div className={styles.PageIntroducer}>
          Welcome Seyfullah
        </div>
        <div className={styles.bottomMarginedforinfo}>
          Here is your job application list
        </div>
        <div className={styles.tableTitle}>
          Applied Jobs (1)
          <TableToolBar add={addTool} />
        </div>
        <Table columns={columns} dataSource={dashboard.all} />
        <Modal
          title="Edit the job card"
          visible={dashboard.openNewJobForm}
          onOk={this.onToggleNewJobForm}
          onCancel={this.onToggleNewJobForm}
        >
          <NewJobForm />
        </Modal>
      </div>
    )
  }
}

export default DashBoard

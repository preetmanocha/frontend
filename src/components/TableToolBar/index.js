import React from 'react'
import { Button } from 'antd'

import styles from './index.less'

export class TableToolBar extends React.PureComponent {
  companyColors = {
    LinkedIn: '#0077B5',
  }

  render() {
    const { add } = this.props
    return (
      <div className={styles.tableTool}>
        <Button type="primary" className={styles.addBtn}>{add.label}</Button>
        <Button icon="reload" />
      </div>
    )
  }
}

import React from 'react'
import { Icon } from 'antd'

import styles from './index.less'

export class CompanyIcon extends React.PureComponent {
  companyColors = {
    LinkedIn: '#0077B5',
  }

  render() {
    const { name } = this.props
    let icon = <span>{name}</span>

    if (this.companyColors[name]) {
      const iconStyle = {
        color: this.companyColors[name],
      }
      icon = <Icon className={styles.companyIcon} type={name.toLowerCase()} theme="filled" style={iconStyle} />
    }
    return icon
  }
}

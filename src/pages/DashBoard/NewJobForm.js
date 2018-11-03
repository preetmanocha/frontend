import React from 'react'
import { DatePicker, Form, Input, Radio } from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group

class NewJobForm extends React.PureComponent {
  handleSubmit = () => {

  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form

    const companyInput = getFieldDecorator('company', {
      rules: [{ required: true, message: 'Please enter the company name!' }],
    })(<Input />)

    const jobTitleInput = getFieldDecorator('title', {
      rules: [{ required: true, message: 'Please enter the job title!' }],
    })(<Input />)

    const appDatePicker = getFieldDecorator('date', {
      rules: [{ required: true, message: 'Please enter the job title!' }],
    })(<DatePicker />)

    const statusRadios = getFieldDecorator('staus', {
      rules: [{ required: true, message: 'Please enter the job title!' }],
    })(
      <RadioGroup>
        <Radio value="planning">Planning</Radio>
        <Radio value="inprogress">In Progress</Radio>
        <Radio value="success">Success</Radio>
        <Radio value="fail">Fail</Radio>
      </RadioGroup>,
    )

    const sourceInput = getFieldDecorator('source', {
      rules: [{ required: true, message: 'Please enter the source!' }],
    })(<Input />)

    return (
      <Form onSubmit={this.handleSubmit} style={{ paddingRight: 32 }}>
        <FormItem
          label="Company"
        >
          {companyInput}
        </FormItem>
        <FormItem
          label="Job Title"
        >
          {jobTitleInput}
        </FormItem>
        <FormItem
          label="Application Date"
        >
          {appDatePicker}
        </FormItem>
        <FormItem
          label="Status"
        >
          {statusRadios}
        </FormItem>
        <FormItem
          label="Status"
        >
          {sourceInput}
        </FormItem>
      </Form>
    )
  }
}
export default Form.create()(NewJobForm)

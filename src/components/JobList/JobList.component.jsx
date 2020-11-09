import React from 'react'
import { List } from 'antd'
import { useSelector } from 'react-redux'

const RecruiterJobList = () => {
  const dataSource = useSelector((state) => state.job.list)

  return (
    <List
      dataSource={dataSource}
      bordered
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[<a key={`a-${item.id}`}>View Job</a>]}
        >
          <List.Item.Meta title={item.title} description={item.recruiterName} />
        </List.Item>
      )}
    />
  )
}

export default RecruiterJobList

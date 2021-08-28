import React, { useEffect, useMemo, useState } from 'react'
import TableContainer from './TableContainer'
import { Button, Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

const Approval = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    /*const doFetch = async () => {
      const response = await fetch('https://randomuser.me/api/?results=100')
      const body = await response.json()
      const contacts = body.results
      console.log(contacts)
      setData(contacts)
    }*/
    const doFetch = async () => {
      const response = require('./search.json')
      const results = response.items
      console.log(results)
      setData(results)
    }
    doFetch()
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Approve',
        accessor: 'cacheId',
      },
      {
        Header: 'Domain',
        accessor: 'displayLink',
      },
      {
        Header: 'Title',
        accessor: 'htmlTitle',
      },
      {
        Header: 'Link',
        accessor: 'link',
        Cell: function ({ value }) {
          return <a href={value} target="_blank">{value}</a>
        }
      },
      {
        Header: 'Snippet',
        accessor: 'snippet',
      },
      {
        Header: 'Preview',
        id: 'preview',
        accessor: 'link',
        Cell: function ({ value }) {
          console.log(value)
          return <iframe src={decodeURIComponent(escape(value))} width="360px;" height="360px;" frameborder="0"
                         marginwidth="0" marginheight="0" scrolling="no"/>
        }
      },
    ],
    []
  )

  return (
    <Container style={{ marginTop: 100 }}>
      <TableContainer columns={columns} data={data}/>
      <p>
        <Button color={'primary'}>Approve selected</Button>
      </p>
    </Container>
  )
}

export default Approval
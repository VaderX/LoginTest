import React, { useState } from 'react';
import { Button, Col, Row, Table } from 'reactstrap';

const Result = (props) => {
    let a = props.data.data.length
    let data = props.data.data;
    let mod = a % 10
    let pages = a / 10 + (mod ? 1 : 0)
    pages = Math.trunc(pages);
    const [page, setPage] = useState(1);

    let tabledata = []
    for (let i = (page - 1) * 10; i < page * 10 && i < a; i++) {
        tabledata.push(data[i])
    }
    tabledata = tabledata.map((content, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{content.subdomain}</td>
                <td>{content.ip}</td>
                <td>{content.statuscode}</td>
                <td>{content.updatedon}</td>
            </tr>
        )
    });
    return (
        <React.Fragment>
            <Row>
                <Col md="5" className="mt-4">
                    <Row>
                        <Col md="2"><Button className="p-2" color="warning" >Copy</Button></Col>
                        <Col md="2"><Button className="p-2" color="warning" >CSV</Button></Col>
                        <Col md="2"><Button className="p-2" color="warning" >Excel</Button></Col>
                        <Col md="2"><Button className="p-2" color="warning" >PDF</Button></Col>
                        <Col md="2"><Button className="p-2" color="warning" >Print</Button></Col>
                    </Row>
                </Col>
                <Col md="12" className="mt-4">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Sub-Domain</th>
                                <th>IP Address</th>
                                <th>Status Code</th>
                                <th>Last Updated On</th>
                            </tr>
                        </thead>
                        <tbody>{tabledata}</tbody>
                    </Table>
                </Col>
                <Col>
                    <Row>
                        <Col md="6">
                            Showing {page} to {page * 10} of {a} entries
                    </Col>
                        <Col md="6">
                            <Row style={{cursor:"pointer"}}>
                                <Col md="2" onClick={() =>{ page >1 ? setPage(page - 1) : setPage(page)}}>Previous</Col>
                                <Col md="1" onClick={() => {page <= pages-1 ? setPage(page + 1) : setPage(page)}}>Next</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}
export default Result;
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Alert } from "shards-react";
import PageTitle from "../../../components/common/PageTitle";
import { UseGetApi } from "../../../services/apiService";
import ClipLoader from "react-spinners/ClipLoader";
import { NavLink } from "react-router-dom";



function NewAttendanceForm() {
    const [loading, setloading] = useState(false);
    const [list, setlist] = useState([]);
    const [notification, setnotification] = React.useState({
        show: false,
        message: '',
        color: 'info'
    });

    const hangleNotification = (s, m, c) => {
        setnotification({ show: s, message: m, color: c });
    };

    const loadList = () => {
        setloading(true);
        let endPoint = "patient"
        UseGetApi('P', endPoint).then(result => {
            if (result.status !== 200) {
                hangleNotification(true, result.message, 'danger')
                setloading(false);
                return false;
            }
            setloading(false);
            setlist(result.data);
            return true;
        });
    };

    useEffect(() => {
        loadList();
    }, []);


    return (
        <Container fluid className="main-content-container px-12">
            {notification.show &&
                <Container fluid className="px-0">
                    <Alert className="mb-0" theme={notification.color}>
                        <i className="fa mx-2 fa-info" ></i>
                        {notification.message}
                    </Alert>
                </Container>}


            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Pacientes" subtitle="Lista de dados" className="text-sm-left" />
            </Row>

            <Row>
                <Col>
                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Pacientes Cadastrados</h6>

                            <NavLink to="/patient-form">
                                <Button style={{ right: '10px', top: '10px', position: 'absolute' }} type="submit" className="mb-4">Adicionar Paciente</Button>
                            </NavLink>
                        </CardHeader>
                        <CardBody className="p-0 pb-3">

                            <table className="table mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th scope="col" className="border-0">
                                            #
                      </th>
                                        <th scope="col" className="border-0">
                                            Nome
                      </th>
                                        <th scope="col" className="border-0">
                                            Sobrenome
                      </th>
                                        <th scope="col" className="border-0">
                                            DT nascimento
                      </th>
                                        <th scope="col" className="border-0">
                                            E-mail
                      </th>
                                        <th scope="col" className="border-0">
                                            CPF
                      </th>
                                        <th scope="col" className="border-0">
                                            Ações
                      </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map(item => (
                                        <tr key={item.patId}>
                                            <td>{item.per.perId}</td>
                                            <td>{item.per.perFirstName}</td>
                                            <td>{item.per.perLastName}</td>
                                            <td style={{ textAlign: 'center' }}>{moment(item.per.perBirth).format("DD/MM/YYYY")}</td>
                                            <td>{item.per.perEmail}</td>
                                            <td>{item.per.perCpf}</td>
                                            <td>
                                                <NavLink to={{
                                                    pathname: "/attendance-form",
                                                    pasprops: { item: item }
                                                }}>
                                                    <Button outline size="sm" theme="success" className="mb-2 mr-1">
                                                        <i className="material-icons">local_hospital</i> CRIAR
                          </Button>
                                                </NavLink>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                            {loading && <div className="loading">
                                <ClipLoader
                                    size={60}
                                    color={"#123abc"}
                                    loading={loading}
                                />
                            </div>}

                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default NewAttendanceForm;
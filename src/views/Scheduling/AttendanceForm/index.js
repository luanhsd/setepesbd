<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useForm } from 'react-hook-form';
=======
import React, { useState, useEffect } from "react";
import moment from "moment";
import { useForm } from "react-hook-form";
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
import {
  Container,
  FormInput,
  FormTextarea,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  FormSelect,
  array,
<<<<<<< HEAD
} from 'shards-react';
import ClipLoader from 'react-spinners/ClipLoader';
import SweetAlert from 'react-bootstrap-sweetalert';
import { UsePostApiURL } from '../../../services/apiService';

import 'react-quill/dist/quill.snow.css';
import '../../../assets/quill.css';
=======
} from "shards-react";
import ClipLoader from "react-spinners/ClipLoader";
import SweetAlert from "react-bootstrap-sweetalert";
import { UsePostApiURL } from "../../../services/apiService";

import "react-quill/dist/quill.snow.css";
import "../../../assets/quill.css";
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188

function AttendanceForm(props) {
  const { register, handleSubmit, errors, setValue, setError } = useForm();
  const [item, setItem] = useState({});

  useEffect(() => {
    verifyItem();
  }, []);

  const verifyItem = () => {
    if (props.location.pasprops) {
      const dados = props.location.pasprops.item;
      setItem(dados);
<<<<<<< HEAD
      setValue('patientName', dados.patient.name);
      setValue('sintomas', dados.att_pre_symptoms);
      setValue('description', dados.att_description);
    } else {
      props.history.push({
        pathname: '/schedule',
=======
      setValue("patientName", dados.patient.name);
      setValue("sintomas", dados.att_pre_symptoms);
      setValue("description", dados.att_description);
    } else {
      props.history.push({
        pathname: "/schedule",
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
      });
    }
  };

  const [loading, setloading] = React.useState(false);

  const handleBack = () => {
<<<<<<< HEAD
    props.history.push('/schedule');
=======
    props.history.push("/schedule");
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
  };

  const [salert, setsalert] = React.useState();
  const hideAlert = () => {
    setsalert(null);
  };

  const redrectAttendance = () => {
    setsalert(null);
<<<<<<< HEAD
    window.location.replace('https://stepesbdmedrecords.herokuapp.com');
  };

  function setData(data) {
    let symptons = item.att_pre_symptoms.split(',').filter((symptom) => {
=======
    window.location.replace("https://stepesbdmedrecords.herokuapp.com");
  };

  function setData(data) {
    let symptons = item.att_pre_symptoms.split(",").filter((symptom) => {
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
      if (symptom.length !== 0) {
        return symptom.toLowerCase();
      }
    });
    return {
      Atendimento: {
        Comentarios: data.description,
        Estado: data.estado,
        Sintomas: symptons,
        Data_atendimento: item.att_date,
        Hospital: {
          Id: Number(item.hos_id),
        },
      },
      Medico: {
        CRM: item.physician.crm,
        Nome: item.physician.name,
        PrivateKey: item.physician.privateKey,
        PublicKey: item.physician.publicKey,
      },
      Paciente: {
        CPF: item.patient.per_cpf,
        Endereco: {
          Bairro: item.patient.address.add_neighborhood,
          CEP: item.patient.address.add_zipcode,
          Cidade: item.patient.address.add_city,
          Latitude: item.patient.address.add_latitude,
          Longitude: item.patient.address.add_longitude,
          Numero: item.patient.address.add_number,
          Rua: item.patient.address.add_street,
          UF: item.patient.address.add_state,
        },
        FatorRH: item.patient.pat_rh_factor,
        GrupoSanguineo: item.patient.pat_blood_group,
        Id: Number(item.patient.per_id),
        Nascimento: item.patient.per_birth,
        Nome: item.patient.name,
        PrivateKey: item.patient.per_private_key,
        PublicKey: item.patient.per_public_key,
      },
    };
  }

  const SubmitHandler = (data) => {
    setloading(true);
    const endPoint =
<<<<<<< HEAD
      'https://cors-anywhere.herokuapp.com/https://stepesbdmedrecords.herokuapp.com';
=======
      "https://cors-anywhere.herokuapp.com/https://stepesbdmedrecords.herokuapp.com";
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
    const attendanceData = setData(data);
    console.log(attendanceData);

    UsePostApiURL(endPoint, attendanceData).then((result) => {
      console.log(result);
      if (result.status !== 200) {
        setsalert(
          <SweetAlert warning title={result.message} onConfirm={hideAlert} />
        );
        setloading(false);
        return false;
      }
      setloading(false);
      setsalert(
        <SweetAlert
          success
          title={result.message}
          onConfirm={redrectAttendance}
        />
      );
      return true;
    });
  };

  return (
    <Container fluid className="main-content-container px-4">
      {salert}
      <br />
      <br />

      <Row>
        <Col lg="12">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Atendimento</h6>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <form onSubmit={handleSubmit(SubmitHandler)}>
                  <Row>
                    <Container>
                      <label htmlFor="feFirstName">Paciente</label>

                      <FormInput
                        name="patientName"
                        //value={name}
                        placeholder="Nome"
                        innerRef={register({ required: true })}
                        disabled={true}
                      />
                      <br />

                      <label htmlFor="feFirstName">Sintomas</label>

                      <FormInput
                        name="sintomas"
                        //value={name}
                        placeholder="Nome"
                        innerRef={register({ required: true })}
                        disabled={true}
                      />
                      <br />

                      <label htmlFor="estado">Estado</label>

                      <FormSelect
                        id="estado"
                        name="estado"
                        invalid={errors.estado}
                        innerRef={register({ required: true })}
                      >
                        <option value="">Selecione...</option>
                        <option value="Leve">Leve</option>
                        <option value="Médio">Médio</option>
                        <option value="Grave">Grave</option>
                      </FormSelect>
                      {errors.estado && <span class="obg">Obrigátorio</span>}
                      <br />
                      <label htmlFor="diagnosis">Descrição*</label>
                      <FormTextarea
                        name="description"
                        //value={diagnosis}
                        invalid={errors.description}
                        innerRef={register({ required: true })}
                        rows="10"
                        //onChange={e => setDiagnosis(e.target.value)}
                      />
                      {errors.description && (
                        <span class="obg">Obrigátorio</span>
                      )}
                      <br />
                    </Container>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Button
                        type="submit"
                        /*onClick={handleNew}*/ theme="accent"
                      >
                        Salvar
                      </Button>
                      <Button
                        type="button"
                        onClick={handleBack}
                        theme="default"
<<<<<<< HEAD
                        style={{ float: 'right' }}
=======
                        style={{ float: "right" }}
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
                      >
                        Voltar
                      </Button>
                    </Col>
                  </Row>
                </form>
              </ListGroupItem>
            </ListGroup>
            {loading && (
              <div className="loading">
<<<<<<< HEAD
                <ClipLoader size={60} color={'#123abc'} loading={loading} />
=======
                <ClipLoader size={60} color={"#123abc"} loading={loading} />
>>>>>>> c18aeae2b6752954646c7b3f849746baa83d9188
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AttendanceForm;

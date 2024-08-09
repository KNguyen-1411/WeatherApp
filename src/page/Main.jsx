import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useDate } from '../Utils/useDate'
import { useStateContext } from '../Context';
import MiniCard from '../components/MiniCard';
import MapWeather from '../components/MapWeather';
import CardAbout from '../components/CardAbout';
export default function Main() {
    const [show, setShow] = React.useState(false);
    const { weather, list } = useStateContext();
    const { date } = useDate();
    if (!weather || weather.length === 0 || !list || list.length === 0) {
        return (
            <div className="text-center my-5">
                <p>Đang tải dữ liệu...</p>
            </div>
        );
    }
    let str = weather.weather[0].description;
    let result = str.charAt(0).toUpperCase() + str.slice(1);
    return (
        <Container fluid className='p-4 position-relative'>
            <Row className='mt-4'>
                <Col md={4} xs={12}  className='mb-2 position-relative' >
                    <Card className={`text-center   `} >
                        <Card.Body className='row ' style={{minHeight:'70vh'}}>
                            <div className='d-flex col-md-0 col-12  flex-column justify-content-around '>
                                <i class={`bi bi-arrow-right-square-fill ${show ? 'rote' : ''} `}
                                    onClick={() => setShow(!show)}
                                ></i>
                                <h2>{date}</h2>
                                <div>
                                    <div>
                                        <img width={200} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
                                    </div>
                                    <div style={{ marginTop: -10 }}>
                                        <h1 style={{ fontSize: 60, fontWeight: 530 }}>
                                            {weather.main.temp}°C
                                        </h1>
                                        <h2>{result}</h2>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around mt-4'>
                                    <h6>
                                        Cảm nhận: {weather.main.feels_like}°C
                                    </h6>
                                    <h6>
                                        Độ ẩm {weather.main.humidity}%
                                    </h6>
                                </div>
                            </div>
                            <div className={`${show ? '' : 'd-vis '} col-md-7 col-12`}>
                                <CardAbout />
                            </div>
                        </Card.Body >
                    </Card>
                </Col>
                <Col md={8} xs={12}  className={`h-100 add-hidden  ${show ? 'd-none' : ''} `}>
                    <Row className='mb-3'>
                        <Col >
                            <Card >
                                <MiniCard />
                            </Card>
                        </Col>
                    </Row>
                    <Row >
                        <Col >
                            <Card className=' media-srcoll-y' >
                                <MapWeather />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="ovl"></div>
        </Container>
    )
}

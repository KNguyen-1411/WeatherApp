import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useStateContext } from '../Context'
import ToogeTheme from '../components/ThemeToggler/ThemeToggler'

export default function Header() {
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    const { setPlace, location } = useStateContext()
    const submitCity = () => {
        if (input !== '') {
            setPlace(input)
        } else {
            setPlace(input2)
        }
        setInput('')
        setInput2('')
    }
    return (
        <Container fluid className='p-0 bg-light header'>
            <Container className='d-flex justify-content-between align-items-center' style={{ height: 60 }}>
                <div className="location d-flex" >
                    <div className="dropdown position-relative " style={{ minWidth: 100 }}>
                        <button className="dropbtn">
                            <i className="bi bi-geo-alt-fill me-2 " style={{ fontSize: 20, cursor: 'pointer' }}></i>
                            {location}
                        </button>
                        <div className="dropdown-content">
                            <input
                                type="text"
                                placeholder='Nhập thành phố'
                                value={input2}
                                onChange={e => setInput2(e.target.value)}
                                onKeyUp={e => {
                                    if (e.key === 'Enter') {
                                        submitCity()
                                    }
                                }}
                            />
                            <i className="bi bi-search bi-search2 position-absolute" style={{ fontSize: 20, cursor: 'pointer' }} onClick={submitCity}></i>
                            <button onClick={() => setPlace('Huế')}>Huế</button>
                            <button onClick={() => setPlace('Da Nang')}>Đà Nẵng</button>
                            <button onClick={() => setPlace('Ha noi')}>Hà nội</button>
                            <button onClick={() => setPlace('Ho Chi Minh')}>Hồ Chí Minh</button>
                            <button onClick={() => setPlace('Can Tho')}>Cần Thơ</button>
                            <button onClick={() => setPlace('Phan thiết')}>Phan Thiết</button>
                            <button onClick={() => setPlace('Đà lạt')}>Đà Lạt</button>
                            <button onClick={() => setPlace('Nha trang')}>Nha Trang</button>
                        </div>
                    </div>
                </div>
                <div className="search  position-relative d-none d-md-block">
                    <i className="bi bi-search position-absolute" style={{ fontSize: 20, cursor: 'pointer' }} onClick={submitCity}></i>
                    <div>
                        <input
                            type="text" className='border-0 '
                            placeholder='Tìm kiếm thành phố..'
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyUp={e => {
                                if (e.key === 'Enter') {
                                    submitCity()
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="toggetheme">
                    <ToogeTheme idBtn={"hide-checkbox"} />
                </div>
            </Container>
        </Container>
    )
}

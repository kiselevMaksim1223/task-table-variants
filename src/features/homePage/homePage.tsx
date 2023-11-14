import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <Container fluid={'sm'} className={'text-center'}>
      <Row>
        <Col>
          <h1>Резиновая верстка таблицы</h1>
          <p className={'fs-4 mt-4'}>
            1) Здесь я реализовал два варианта резиновой таблицы. В первом варианте (scrolled table)
            при уменьшении размера окна браузера таблица горизонтально скролится. Во втором варианте
            при уменьшении размера окна браузера таблица меняет свой вид. Вы можете посмотреть оба
            варианта перейдя на каждую страницу по нажатию на определенную кнопку ниже, а также по
            нажатию по ссылкам в хедэре.
          </p>
          <p className={'fs-4 mt-4'}>
            2) При выборе статуса задачи <i>выполнено</i> задача уходит в раздел выполненных и
            наоборот.
          </p>
          <div className={'d-flex gap-3 justify-content-center flex-wrap'}>
            <Link to="/scrolled">
              <Button variant="info" size={'lg'}>
                Таблица со скролом
              </Button>
            </Link>
            <Link to="/responsive">
              <Button variant="info" size={'lg'}>
                Адаптивная таблица
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

"use client"
import React from 'react'
import CountUp from 'react-countup';

export default function NumbersSection() {
  return (
    <section className="numbers_container">
    <div className="number_counter">
      <div className="counter_text">
          <CountUp start={0} prefix='+' end={350} />
      </div>
      <p className="number_label">clients</p>
  </div>
  <div className="number_counter">
      <div className="counter_text">
        <CountUp start={0} prefix='+' end={21} suffix='M' />
      </div>
      <p  className="number_label">invested in ads</p>
  </div>
  <div className="number_counter">
      <div className="counter_text">
      <CountUp start={0} prefix='+' end={160} suffix='M' />
      </div>
      <p  className="number_label">generated income to our clients</p>
  </div>

  </section>
  )
}

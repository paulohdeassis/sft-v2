import React from 'react'
interface Props {
    userName: string
}
export default function MembersSection({userName}: Props) {
  return (
    <section className="members">
    <div className="steps_container">
        <div className="step">
            <svg id="Layer_1" height="48" viewBox="0 0 32 32" width="48" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><g fill="rgb(255,255,255)"><circle cx="16" cy="6.5" r="5.5"/><path d="m28.206 20.649a3.1 3.1 0 0 1 .221 3.748 15 15 0 0 1 -24.854 0 3.1 3.1 0 0 1 .221-3.748 16.011 16.011 0 0 1 24.412 0z"/></g></svg>
            <h3> Head of sales</h3>
            <ul><li className="user-name"><h4 className="user-name">{userName}</h4></li></ul>

            <div className="contact_user_btn"><a className="hero_url"  href="#footer"> Contact Head of Sales</a></div>
        </div>
        <div className="step">
            <svg id="Layer_1" height="48" viewBox="0 0 32 32" width="48" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><g fill="rgb(255,255,255)"><circle cx="16" cy="6.5" r="5.5"/><path d="m28.206 20.649a3.1 3.1 0 0 1 .221 3.748 15 15 0 0 1 -24.854 0 3.1 3.1 0 0 1 .221-3.748 16.011 16.011 0 0 1 24.412 0z"/></g></svg>
            <h3>Founders</h3>
            <ul>
                <li ><h4>Marcel Fernandes</h4></li>
            </ul>

        </div>
    </div>
   </section>
  )
}

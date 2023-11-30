import React from 'react'

const Jubotron = () => {
  return (
    <div className="jumbotron text-center">
  <h1>dEDGE INSTITUTE</h1> 
  <p>...Empowering Digital Entrepreneurship</p> 
  <form>
    <div className="input-group">
      <input type="email" className="form-control" size="50" placeholder="Email Address" required />
      <div className="input-group-btn">
        <button type="button" className="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
</div>
  )
}

export default Jubotron;
function Info(props) {
  return(
<div className="info"> 
<div>
<h6>Model Size</h6>
<h3>{parseFloat(props.size).toFixed(2) + ' KB'}</h3>
</div>
{/* <div>
<h6>Vertices</h6>
<h3>{props.vertices}</h3>
</div> */}
</div>
  )
}

export default Info;
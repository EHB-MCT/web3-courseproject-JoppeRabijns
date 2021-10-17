function Header(props) {
  return(
<div className="header"> 
<h1>{props.title}</h1>
<h3>{props.creator}</h3>
</div>
  )
}

export default Header;
const Footer = () => {
  return (
    <div className="container-fluid">
    <div
      className=" row flex flex-lg-row  "
      style={{ color: "white", backgroundColor: "black" }}
    >
      <div className="col-4 Footer-list">
        <ul class="list-group  flex  flex-row">
          <li class="list-group-item ml-52 p-2">Click Masters </li>
          <li class="list-group-item p-2">For Users</li> 
          <li class="list-group-item p-2">||</li> 
          <li class="list-group-item p-2" >For Photographers</li>
        </ul>
      </div>
      <div className=" pl-52 ml-52 text-center p-2 col-2 copyright-content ">
        
        © The Uniques | All Rights Reserved
      </div>
    </div>
    </div>
  );
};
export default Footer;

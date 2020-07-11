<template>

 <div class="main">
        <aside>
          <div class="sidebar left ">
            <div class="user-panel">
              <div class="pull-left image">
                <img src="http://via.placeholder.com/160x160" class="rounded-circle" alt="User Image">
              </div>
              <div class="pull-left info">
                <p>Диспетчер_1</p>
                <a href="#" class="mb-1"><i class="fa fa-circle text-success" id="online"></i> Online</a>
                
              </div>
            </div>
            <ul class="list-sidebar bg-defoult">
              <li> <a href="#" data-toggle="collapse" data-target="#dashboard" class="collapsed active" > <i class="fa fa-th-large"></i> <span class="nav-label"> Главное меню </span> <span class="fa fa-chevron-left pull-right"></span> </a>
              <ul class="sub-menu collapse" id="dashboard">
                <li class="active"><a href="#">CSS3 Animation</a></li>
                <li><a href="#">General</a></li>
                <li><a href="#">Buttons</a></li>
                <li><a href="#">Tabs & Accordions</a></li>
                <li><a href="#">Typography</a></li>
                <li><a href="#">FontAwesome</a></li>
                <li><a href="#">Slider</a></li>
                <li><a href="#">Panels</a></li>
                <li><a href="#">Widgets</a></li>
                <li><a href="#">Bootstrap Model</a></li>
              </ul>
            </li>
            <li> <a href="#"><i class="fa fa-diamond"></i> <span class="nav-label">Layouts</span></a> </li>
            <li> <a href="#" data-toggle="collapse" data-target="#products" class="collapsed active" > <i class="fa fa-bar-chart-o"></i> <span class="nav-label">Graphs</span> <span class="fa fa-chevron-left pull-right"></span> </a>
            <ul class="sub-menu collapse" id="products">
              <li class="active"><a href="#">CSS3 Animation</a></li>
              <li><a href="#">General</a></li>
              <li><a href="#">Buttons</a></li>
              <li><a href="#">Tabs & Accordions</a></li>
              <li><a href="#">Typography</a></li>
              <li><a href="#">FontAwesome</a></li>
              <li><a href="#">Slider</a></li>
              <li><a href="#">Panels</a></li>
              <li><a href="#">Widgets</a></li>
              <li><a href="#">Bootstrap Model</a></li>
            </ul>
          </li>
          <li> <a href="#"><i class="fa fa-laptop"></i> <span class="nav-label">Grid options</span></a> </li>
          <li> <a href="#" data-toggle="collapse" data-target="#tables" class="collapsed active" ><i class="fa fa-table"></i> <span class="nav-label">Tables</span><span class="fa fa-chevron-left pull-right"></span></a>
          <ul  class="sub-menu collapse" id="tables" >
            <li><a href=""> Static Tables</a></li>
            <li><a href=""> Data Tables</a></li>
            <li><a href=""> Foo Tables</a></li>
            <li><a href=""> jqGrid</a></li>
          </ul>
        </li>
        <li> <a href="#" data-toggle="collapse" data-target="#e-commerce" class="collapsed active" ><i class="fa fa-shopping-cart"></i> <span class="nav-label">E-commerce</span><span class="fa fa-chevron-left pull-right"></span></a>
        <ul  class="sub-menu collapse" id="e-commerce" >
          <li><a href=""> Products grid</a></li>
          <li><a href=""> Products list</a></li>
          <li><a href="">Product edit</a></li>
          <li><a href=""> Product detail</a></li>
          <li><a href="">Cart</a></li>
          <li><a href=""> Orders</a></li>
          <li><a href=""> Credit Card form</a> </li>
        </ul>
      </li>
      <li> <a href=""><i class="fa fa-pie-chart"></i> <span class="nav-label">Metrics</span> </a></li>
      <li> <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span></a> </li>
      <li> <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span></a> </li>
      <li> <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span></a> </li>
      <li> <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span></a> </li>
      <li> <a href="#"><i class="fa fa-files-o"></i> <span class="nav-label">Other Pages</span></a> </li>
    </ul>
    </div>
    </aside>
 <router-view/>
 </div>

<!-- <div class="wrapper">
   <div class="app-main-layout">
   <nav class="navbar"></nav>


   <router-view/>
   </div></div> -->
</template>


<script>
export default {
   
}
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700');
.sidebar{ width:220px;  background-color:rgb(175, 170, 170);transition: all 0.5s  ease-in-out; height:100vh}
.bg-defoult{background-color:rgb(175, 170, 170);}
.sidebar ul{ list-style:none; margin:0px; padding:0px; }
.sidebar li a,.sidebar li a.collapsed.active{ display:block; padding:8px 12px; color:#fff;border-left:0px solid #dedede;  text-decoration:none}
.sidebar li a.active{background-color: rgb(175, 170, 170);border-left:5px solid #dedede; transition: all 0.5s  ease-in-out}
.sidebar li a:hover{background-color:#000 !important;}
.sidebar li a i{ padding-right:5px;}
.sidebar ul li .sub-menu li a{ position:relative}
.sidebar ul li .sub-menu li a:before{
    font-family: FontAwesome;
    content: "\f105";
    display: inline-block;
    padding-left: 0px;
    padding-right: 10px;
    vertical-align: middle;
}
.sidebar ul li .sub-menu li a:hover:after {
    content: "";
    position: absolute;
    left: -5px;
    top: 0;
    width: 5px;
    background-color: #111;
    height: 100%;
}
.sidebar ul li .sub-menu li a:hover{ background-color:#222; padding-left:20px; transition: all 0.5s  ease-in-out}
.sub-menu{ border-left:5px solid #dedede;}
	.sidebar li a .nav-label,.sidebar li a .nav-label+span{ transition: all 0.5s  ease-in-out; margin-top: 20px;}
	

	.sidebar.fliph li a .nav-label,.sidebar.fliph li a .nav-label+span{ display:none;transition: all 0.5s  ease-in-out}
	.sidebar.fliph {
    width: 42px;transition: all 0.5s  ease-in-out;
   
}
	
.sidebar.fliph li{ position:relative}
.sidebar.fliph .sub-menu {
    position: absolute;
    left: 39px;
    top: 0;
    background-color: #222;
    width: 150px;
    z-index: 100;
}
	

	.user-panel {
    clear: left;
    display: block;
    float: left;
    
}
.user-panel>.image>img {
    width: 100%;
    max-width: 45px;
    height: auto;
}
.user-panel>.info,  .user-panel>.info>a {
    color: #fff;
    margin-bottom: 20px;
}
.user-panel>.info>p {
    font-weight: 600;
    margin-bottom: 9px;
}
.user-panel {
    clear: left;
    display: block;
    float: left;
    width: 100%;
    margin-bottom: 15px;
    padding: 25px 15px;
    border-bottom: 1px solid;
}
.user-panel>.info {
    padding: 5px 5px 5px 15px;
    line-height: 1;
    position: absolute;
    left: 55px;
}

.fliph .user-panel{ display: none; }

#online{
   margin-bottom: 20px;
}

</style>

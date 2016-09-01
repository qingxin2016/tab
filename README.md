# tab
//////////////////////////////////////////////
<html source>
/////////////////////////////////////////////
#<div class="tab">
                    <div class="tab-key">
                        <ul>
                            <li>tab1</li>
                            <li>tab2</li>
                            <li>tab3</li>
                            <li>tab4</li>
                        </ul>
                    </div>
                    <div class="tab-con">
                        <dl>
                            <dd>
                                con1
                            </dd>
                            <dd>
                                con2
                            </dd>
                            <dd>
                                con3
                            </dd>
                            <dd>
                                con4
                            </dd>
                        </dl>
                    </div>
                </div>
///////////////////////////////////////////////
#<div class="tab">
                    <div class="tab-key">
                        <ul>
                            <li>tab1</li>
                            <li>tab2</li>
                            <li>tab3</li>
                            <li>tab4</li>
                        </ul>
                    </div>
                    <div class="tab-con">
                        <dl>
                            <dd>
                                con1
                            </dd>
                            <dd>
                                con2
                            </dd>
                            <dd>
                                con3
                            </dd>
                            <dd>
                                con4
                            </dd>
                        </dl>
                    </div>
                </div>
#<div class="tab02">
                    <div class="tab-key02">
                        <ul>
                            <li>tab1</li>
                            <li>tab2</li>
                            <li>tab3</li>
                            <li>tab4</li>
                        </ul>
                    </div>
                    <div class="tab-con02">
                        <dl>
                            <dd>
                                con1
                            </dd>
                            <dd>
                                con2
                            </dd>
                            <dd>
                                con3
                            </dd>
                            <dd>
                                con4
                            </dd>
                        </dl>
                    </div>
                </div>
  ////////////////////////////////////////////
  css file
  ///////////////////////////////////////////
  .tab,
    .tab02 {
        width: 100%;
    }
    
    .tab-key ul li,
    .tab-key02 ul li {
        width: 10%;
        height: 25px;
        border: 1px solid #ccc;
        list-style: none;
        text-align: center;
        display: inline-block;
    }
    
    .active {
        background: orange;
    }
    
    .active02 {
        background: green;
    }
    
    .tab-con,
    .tab-con02 {
        border: 1px solid #ccc;
    }
    
    .tab-con dl dd,
    .tab-con02 dl dd {
        display: none;
    }
    
    //////////////////////////////////////////////////////
    how to use it
    /////////////////////////////////////////////////////
    $('.tab').mytab();
            $('.tab02').mytab({
                key: '.tab-key02',
                con: '.tab-con02',
                classname: 'active02'
            });
//////we can change the variable as we want.


    
    
    

var delay,name="",email="",tel="",address="",apt="",zip="",city="",state="",country="",creditcard="",month="",year="",cvv="";function fillCheckout(){for(document.getElementsByTagName("select")[1].value=country,$('*[placeholder="name"]')[0].value=name,$('*[placeholder="email"]')[0].value=email,$('*[placeholder="tel"]')[0].value=tel,$('*[placeholder="address"]')[0].value=address,$('*[placeholder="apt, unit, etc"]')[0].value=apt,$('*[placeholder="zip"]')[0].value=zip,$('*[placeholder="city"]')[0].value=city,document.getElementsByTagName("select")[0].value=state,$('*[placeholder="number"]')[1].value=creditcard,document.getElementsByTagName("select")[2].value=month,document.getElementsByTagName("select")[3].value=year,$('*[placeholder="CVV"]')[0].value=cvv,$("#order_terms").prop("checked",!0),floatingTags=document.getElementsByClassName("string required control-label floaty"),i=0;i<floatingTags.length-1;i++)floatingTags[i].className+=" floating";for(floatingTags=document.getElementsByClassName("string required"),i=0;i<floatingTags.length;i++)"string required"==floatingTags[i].className&&(floatingTags[i].className+=" floating");if(document.getElementsByClassName("string email required")[0].className+=" floating",document.getElementsByClassName("email required control-label floaty")[0].className+=" floating",""!=apt)for(document.getElementsByClassName("string optional control-label floaty")[0].className+=" floating",classOptional=document.getElementsByClassName("string optional"),i=0;i<classOptional.length;i++)"string optional"==classOptional[i].className&&(classOptional[i].className+=" floating");document.getElementsByClassName("nlb string required srl floaty")[0].className+=" floating",document.getElementsByClassName("nclb string required sr-label floaty")[0].className+=" floating",document.getElementsByClassName("icheckbox_minimal")[1].className+=" checked",setTimeout(processPayment,10)}function processPayment(){document.getElementsByName("commit")[0].click(),"process payment"==document.getElementsByName("commit")[0].value&&(document.getElementsByName("commit")[0].click(),setTimeout(processPayment,10))}chrome.storage.sync.get(["name","email","telephone","address","apt","zip","city","state","country","creditcard","month","year","cvv","checkoutDelay"],function(e){name=e.name,email=e.email,tel=e.telephone,address=e.address,apt=e.apt,zip=e.zip,city=e.city,state=e.state,country=e.country,creditcard=e.creditcard,month=e.month,year=e.year,cvv=e.cvv,delay=void 0===e.checkoutDelay?3e3:1e3*e.checkoutDelay,setTimeout(fillCheckout,delay)});

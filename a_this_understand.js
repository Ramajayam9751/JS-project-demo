const productname = {
    productid : 8428,
    product_productname : "chikenmasala",
    product_productbrand : "Aachi",

    product_fullname : function(){
        return this. product_productname + "  " + this.product_productbrand


}
}


console.log("productid===>",product.product_productid)
console.log("product name===>",product.product_productname)
console.log("product fullname===>",product.product_productfullname())
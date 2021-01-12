function shortDescription(_string) {

   return  _string.length > 300 ?  _string.substring(0, 300) +"..." : _string ;


}

export default shortDescription;
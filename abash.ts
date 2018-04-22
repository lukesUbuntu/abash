export class abash {
    cipher_array:Array<string>;
    decipher_array:Array<string>;
    /**
     * constructor
     * @param cipher string
     * @param deciphers tring
     */
    constructor(cipher:string,decipher:string){
       if (cipher.length != decipher.length){
           throw new Error('cipher string & decipher string must be the same string length');
       }else{
           this.decipher_array = []
           this.cipher_array = []
           for (let i = 0, chr; i < cipher.length; i++) {
               let c = cipher.charAt(i);
       
               this.cipher_array.push(c)
          
           }
           for (let i = 0, chr; i < decipher.length; i++) {
               let c = decipher.charAt(i);
               this.decipher_array.push(c)

           }
       }
  
      
   }
   /**
    * decipher
    * @param encrypted string 
    */
  decipher(encrypted:string):string{
       //only decrypt whats in our cipher
       let cipher:string = "";
       for (var i = 0, chr; i < encrypted.length; i++) {
           var char = encrypted.charAt(i);
           var dechar = this.decipher_array.indexOf(char);

           if (dechar > -1){
               cipher += this.cipher_array[dechar];
           }
           else{
               cipher += char;
           }
               
       }
       return cipher;
  }
}
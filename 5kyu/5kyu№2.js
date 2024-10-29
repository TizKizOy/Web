var CaesarCipher = function (shift) 
{
    class CaesarCipher
    {   
        encode(str)
        {  
            let result = "";
            for(let i=0;i<str.length;i++)
            {   
                let charCode = str[i].charCodeAt();
                if(charCode <= 122 && charCode >= 97)
                    charCode = ((charCode - 97 + shift) % 26) + 97; 
                else if(charCode >= 65 && charCode <= 90)
                    charCode = ((charCode - 65 + shift) % 26) + 65;
               result += String.fromCharCode(charCode).toUpperCase();
           }
           return result;
        }

        decode(str)
        {
        let result = "";
        for(let i=0;i<str.length;i++)
        {   
            let charCode = str[i].charCodeAt();
            if(charCode >= 65 && charCode <= 90)
                charCode = ((charCode + 65 - shift) % 26) + 65;
            result += String.fromCharCode(charCode).toUpperCase();
        }
        return result;
        }
    }
    return new CaesarCipher(shift)
};

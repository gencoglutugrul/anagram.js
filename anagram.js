 class anagramjs{
    constructor(a,b,alphabet="abcçdefgğhıijklmnoöprsştuüvyz"){
        this._text1=a;
        this._text2=b;
        this._alphabet=alphabet;
    }
    
    /**
     * 
     * @param {int} x 
     * @desc check if x prime
     */
    _isPrime(x){
        if(x!==2 && x%2===0)
            return false;
        for(let i=2;i<x;i++){
            if(x%i===0)
                return false;
        }
        return true;
    }
    
    /**
     * 
     * @param {int} n 
     * @desc  get n prime number(s)
     */
    _getPrimeNumbers(n){
        let count=0,currentNum=2,primeArray=[];
        while(count<n){
                if(this._isPrime(currentNum)){
                        primeArray.push(currentNum);
                        count++;
                }
                currentNum++;
        }
        return primeArray;
    }

    /**
     * 
     * @param {string} text 
     * @param {string} ignore 
     * @desc  remove chars that isn't in ignore array from text.
     */
    _clearText(text,ignore){
        let newText="";
        text.split('').forEach(element => {
            if(ignore.indexOf(element) > -1)
                newText+=element;
        });
        return newText;
    }
    isAnagram(){
        let alphabet= this._alphabet.split('');
        let numberForAlphabet=this._getPrimeNumbers(alphabet.length);
        let a=this._clearText(this._text1,alphabet).split(''),
            b=this._clearText(this._text2,alphabet).split('');
        if(a.length!=b.length)
            return false;
        let totalSumArray=[0,0];
        for(let i=0;i<a.length;i++){
            totalSumArray[0] = totalSumArray[0] * numberForAlphabet[alphabet.indexOf(a[i])];
            totalSumArray[1] = totalSumArray[1] * numberForAlphabet[alphabet.indexOf(b[i])];
        }
        return totalSumArray[0]===totalSumArray[1];
    };
 }
 
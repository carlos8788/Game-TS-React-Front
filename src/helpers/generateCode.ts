const generateCode = (): string => {
    return Array.from({ length: 5 }, () => String.fromCodePoint(Math.floor(Math.random() * 26) + 65)).join('');
  };
  
export default generateCode;
  
// const generateCode = (): string => {
//     const code: string[] = [];
//     for (let i = 0 ; i < 5; i++){
//         const num = Math.floor(Math.random() * 26) + 65;
//         code.push(String.fromCodePoint(num));
//     }
//     console.log(code.join(''));
//     return code.join('');
// }

// export default generateCode

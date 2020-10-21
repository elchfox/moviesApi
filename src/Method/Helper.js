class Helper{
    isCloseToBottom = (e) => {
        const node = e.target;
        const paddingToBottom = 500;
        const checkWhenLoad = node.clientHeight - paddingToBottom;
       return (node.scrollHeight - node.scrollTop - checkWhenLoad <= paddingToBottom)
      
      
    };

}


export default new Helper()
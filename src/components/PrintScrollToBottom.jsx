import { useState, useEffect, useLayoutEffect } from "react";

const scroll = () => window.scrollTo(0, document.documentElement.scrollHeight)

const PrintScrollToBottom = ({children}) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect( () => {
    scroll();
    function onScroll(){
      const {clientHeight, scrollHeight, scrollTop} = document.documentElement
      setIsScrolled(clientHeight + scrollTop < scrollHeight)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  
  useLayoutEffect(() => {
    if (!isScrolled) {
      scroll()
    }
  })

  return children
}



/* const PrintScrollToBottom = ({children}) => {
  const {clientHeight, scrollHeight} = document.documentElement
  
  useLayoutEffect(() => {
    const isScrolled = clientHeight + window.pageYOffset < scrollHeight
    if (!isScrolled) {
      scroll()
    }
  })

  return children
}
 */

export default PrintScrollToBottom;

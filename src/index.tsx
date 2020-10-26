import React, { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactElement
  onClickOutside: OnClickOutsideFunc
}

interface OnClickOutsideFunc {
  (event?: MouseEvent): void
}

export default ({ children, onClickOutside }: Props) => {
  const childRef: React.RefObject<HTMLElement> = useRef(null)
  const childElement = React.Children.only(children)

  useEffect(() => {
    const outsideClickEvent = (event: MouseEvent): void => {
      const content = childRef.current
        ? [
            childRef.current,
            ...Array.from(childRef.current.getElementsByTagName('*'))
          ]
        : []
      if (
        !content.some(
          (child: Node) => child && child.contains(event.target as Node)
        )
      ) {
        if (onClickOutside) {
          onClickOutside(event)
        }
      }
    }

    document.addEventListener('click', outsideClickEvent)
    return () => {
      document.removeEventListener('click', outsideClickEvent)
    }
  }, [onClickOutside])

  return React.cloneElement(childElement, { ref: childRef })
}

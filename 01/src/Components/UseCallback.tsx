import React, {useMemo, useState} from "react";

const MessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const MessageCounter2 = React.memo(MessageCounter)

const BooksSecret = (props: { books: Array<string>; addBook: () => void }) => {
    console.log('books')
    return <div>
        <button onClick={props.addBook}> add book</button>
        {props.books.map((b, i) => <div key={i}> {b}</div>)}
    </div>
}
const Books = React.memo(BooksSecret)


const LikeUseCallback = () => {
    console.log('LikeUseCallback component')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS']);


    const addBook = () => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }
    const memoizedAddBook = useMemo(() => {
        return addBook
    }, [books])

    return <>
        <h3>UseCallback</h3>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        <span> Counter</span>
        <MessageCounter2 count={counter}/>
        <Books books={books}
               addBook={memoizedAddBook}
        />
    </>
}
export default LikeUseCallback
import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from "./Components/BookShelf";
import BookSearch from "./Components/BookSearch";
import {Link, Route} from 'react-router-dom';

class BooksApp extends React.Component {

    state = {
        books : []
    };

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books : books});
        })
    };

    getBooksForShelf = (shelf) => {
        return this.state.books.filter((b) => b.shelf === shelf.shelfFieldName);
    }

    render() {
        const shelves = [
            {
                shelfName: 'Currently Reading',
                shelfFieldName : 'currentlyReading',
            },
            {
                shelfName: 'Want to Read',
                shelfFieldName : 'wantToRead',
            },
            {
                shelfName: 'Read',
                shelfFieldName : 'read',
            },
        ];

        return (
            <div className="app">

                {/*search page*/}
                <Route path="/search" render={() => (
                    <BookSearch books={this.state.books} fetchBooks={this.fetchBooks}/>
                )}/>

                {/*home page*/}
                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                {shelves.map((shelf, index) => (
                                    <BookShelf key={index} shelfName={shelf.shelfName} books={this.getBooksForShelf(shelf)} fetchBooks={this.fetchBooks}/>
                                ))}
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to="/search">Add a book</Link>
                        </div>
                    </div>
                )}/>

            </div>
        )
    }
}

export default BooksApp

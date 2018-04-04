import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from "./Components/BookShelf";
import BookSearch from "./Components/BookSearch";
import {Link, Route} from 'react-router-dom';

class BooksApp extends React.Component {

    state = {
        shelves: [
            {
                shelfName: 'Currently Reading',
                shelfFieldName : 'currentlyReading',
                books: []
            },
            {
                shelfName: 'Want to Read',
                shelfFieldName : 'wantToRead',
                books: []
            },
            {
                shelfName: 'Read',
                shelfFieldName : 'read',
                books: []
            },
        ]
    };

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = () => {
        BooksAPI.getAll().then((books) => {
            let shelves = this.state.shelves.slice();
            shelves.forEach((shelf) => {
                shelf.books = books.filter((b) => b.shelf === shelf.shelfFieldName)
            });
            this.setState(shelves);
        })
    };

    render() {

        return (
            <div className="app">

                {/*search page*/}
                <Route path="/search" render={() => (
                    <BookSearch fetchBooks={this.fetchBooks}/>
                )}/>

                {/*home page*/}
                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                {this.state.shelves.map((shelf, index) => (
                                    <BookShelf key={index} shelfName={shelf.shelfName} books={shelf.books} fetchBooks={this.fetchBooks}/>
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

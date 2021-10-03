import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} from 'graphql'
import {find, filterByObject} from 'app/utils'

import Book from 'app/models/Book'
import Author from 'app/models/Author'

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent) {
        return find(authors, parent.authorId)
      },
    },
  }),
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    age: {type: GraphQLInt},
    name: {type: GraphQLString},
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, _args) {
        return filterByObject(books, {authorId: parent.id})
      },
    },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(_parent, args) {
        return find(books, args.id)
      },
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(_parent, args) {
        return find(authors, args.id)
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(_parent, _args) {
        return books
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(_parent, _args) {
        return authors
      },
    },
  },
})

export default new GraphQLSchema({query: RootQuery})

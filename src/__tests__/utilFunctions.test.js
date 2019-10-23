import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

describe('My tests', () => {
    test('Test to see if a short string is not shortened', () => {
        expect(shortenText(shortText)).toHaveLength(29)
    })
    test('Test to see if a longer string is shortened', () => {
        var shortened = shortenText(longText)
        expect(shortened.length).not.toBe(longText.length)
        expect(shortened.slice(-3)).toBe('...')
    })
})

describe('Tests on WordCount', () => {
    test('Test to see if wordCount correctly sums up number of words', () => {
        expect(wordCount(posts)).toBe(233)
    })
})

describe('Tests on attachUserName', () => {
    test('Checking to make sure that passing in users and posts will attach a displayName properly to each post', () => {
        let newPosts = attachUserName(users, posts)
        let deletedPost = posts[5]
        expect(newPosts[0]).toHaveProperty('displayName')
        expect(newPosts).not.toContainEqual(deletedPost)
    })
})

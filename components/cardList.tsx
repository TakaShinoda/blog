import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Date } from '../components/date'

export const CardList = ({ allPostsData }) => {
  return (
    <>
      <ul className="list-none">
        {allPostsData.map(({ id, date, title, image }) => (
          <div className="inline-flex mr-5 max-w-180">
            <li
              className="mb-5 rounded-lg overflow-hidden shadow-xl p-3 w-44 bg-white"
              key={id}
            >
              {image ? (
                <Image
                  src={image}
                  width="200"
                  height="200"
                  className="w-24 h-24"
                  alt="thumbnail"
                />
              ) : (
                <Image
                  src="/images/no_image.png"
                  width="200"
                  height="200"
                  className="w-24 h-24"
                  alt="no-image"
                />
              )}
              <br />
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />

              <small className="text-gray-400">
                <span className="mr-1">
                  <FaRegCalendarAlt />
                </span>
                <Date dateString={date} />
              </small>
            </li>
          </div>
        ))}
      </ul>
    </>
  )
}

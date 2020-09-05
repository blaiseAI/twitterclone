# New Features TODO

- [ ] Pagination
  - Server
    - [] v2 mews endpoint
    - [] Skip and Limit from query params
      - [] Defaults: skip - 0, limit - 10
      - [] Include total count in response
    - [] Order by created date
  - Client
    - [] Skip and Limit variables
    - [] Remove .reverse()
    - [] Load More Button
      - [] Hidden on page load
      - [] Only show button if has_more is treu
      - [] Get next page on button click
        - [] Set skip
        - [] Hide button
        - [] Request mews
        - [] Show button
- [ ] Search
  - Server
    - [ ] Add search param to /v2/mews query params
    - [ ] Update find options if search specified
  - Client
    - [ ] Add search input
    - [ ] Add search button
      - On click
        - [ ] Set search variable
        - [ ] List mews with search param
- [ ] Deploy!

# STRETCH

- [ ] Infinite scroll...

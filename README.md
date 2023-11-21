# A Squid with just addLog for Foundation migration task

It takes over a day to be full synced on my PC.

task: https://github.com/subsquid-quests/foundation-subgraph-migration

## Implementation

* Subscribing 9 topics with `address: undefined`
* No decoding or handling them

## How long it takes to be synced

* The ETA moves between 10 - 400 hours.
* Seems like it depends on how the archive server is busy and how fetching data is large.
* It takes over a day to be full synced on my PC.

Like `archive request failed, will retry in 60 secs` errors will be occurred during syncing.

## Foundation subgraph uses DataSource Template

There is [DataSource Template](https://thegraph.com/docs/en/developing/creating-a-subgraph/#data-source-templates) in subgraph.
Foundation subgraph uses it for those 9 topics and other few topics.

* subsquid-sdk does not support `addLog` dynamically
  * The sdk creates all requests data at the very first of `process.run()`
* There are `>40k` addresses to subscribe for the foundation stuff now
  * If we specify 50k addresses or more, `413` error will be occurred anyway

---
title: "插件支持"
description: 介绍 PostgreSQL 支持的插件。
keyword: PostgreSQL,关系型数据库,数据库
draft: false
weight: 92
---
本文介绍 PostgreSQL 支持的插件及插件说明。


|插件名称 |插件版本 |插件说明 |
| :------------ | :------- | :----------- |
| address_standardizer         | 3.3.1           | Used to parse an address into constituent elements. Generally used to support geocoding address norm alization step.  |
| address_standardizer_data_us | 3.3.1           | Address Standardizer US dataset example  |
| adminpack                    | 2.1             | administrative functions for PostgreSQL  |
| amcheck                      | 1.3             | functions for verifying relation integrity  |
| autoinc                      | 1.0             | functions for autoincrementing fields  |
| bloom                        | 1.0             | bloom access method - signature file based index  |
| bool_plperl                  | 1.0             | transform between bool and plperl  |
| bool_plperlu                 | 1.0             | transform between bool and plperlu  |
| btree_gin                    | 1.3             | support for indexing common datatypes in GIN  |
| btree_gist                   | 1.7             | support for indexing common datatypes in GiST  |
| citext                       | 1.6             | data type for case-insensitive character strings  |
| citus                        | 11.1-1          | Citus distributed database  |
| citus_columnar               | 11.1-1          | Citus Columnar extension  |
| cube                         | 1.5             | data type for multidimensional cubes  |
| dblink                       | 1.2             | connect to other PostgreSQL databases from within a database  |
| dict_int                     | 1.0             | text search dictionary template for integers  |
| dict_xsyn                    | 1.0             | text search dictionary template for extended synonym processing  |
| earthdistance                | 1.1             | calculate great-circle distances on the surface of the Earth  |
| file_fdw                     | 1.0             | foreign-data wrapper for flat file access  |
| fuzzystrmatch                | 1.1             | determine similarities and distance between strings  |
| hstore                       | 1.8             | data type for storing sets of (key, value) pairs  |
| hstore_plperl                | 1.0             | transform between hstore and plperl  |
| hstore_plperlu               | 1.0             | transform between hstore and plperlu  |
| hstore_plpython3u            | 1.0             | transform between hstore and plpython3u  |
| insert_username              | 1.0             | functions for tracking who changed a table  |
| intagg                       | 1.1             | integer aggregator and enumerator (obsolete)  |
| intarray                     | 1.5             | functions, operators, and index support for 1-D arrays of integers  |
| isn                          | 1.2             | data types for international product numbering standards  |
| jsonb_plperl                 | 1.0             | transform between jsonb and plperl  |
| jsonb_plperlu                | 1.0             | transform between jsonb and plperlu  |
| jsonb_plpython3u             | 1.0             | transform between jsonb and plpython3u  |
| lo                           | 1.1             | Large Object maintenance  |
| ltree                        | 1.2             | data type for hierarchical tree-like structures  |
| ltree_plpython3u             | 1.0             | transform between ltree and plpython3u  |
| moddatetime                  | 1.0             | functions for tracking last modification time  |
| old_snapshot                 | 1.0             | utilities in support of old_snapshot_threshold  |
| pageinspect                  | 1.10            | inspect the contents of database pages at a low level  |
| pg_buffercache               | 1.3             | examine the shared buffer cache  |
| pg_dirtyread                 | 2               | Read dead but unvacuumed rows from table  |
| pg_freespacemap              | 1.2             | examine the free space map (FSM)  |
| pg_prewarm                   | 1.2             | prewarm relation data  |
| pg_stat_statements           | 1.10            | track planning and execution statistics of all SQL statements executed  |
| pg_surgery                   | 1.0             | extension to perform surgery on a damaged relation  |
| pg_trgm                      | 1.6             | text similarity measurement and index searching based on trigrams  |
| pg_visibility                | 1.2             | examine the visibility map (VM) and page-level visibility info  |
| pg_walinspect                | 1.0             | functions to inspect contents of PostgreSQL Write-Ahead Log  |
| pgautofailover               | 2.0             | pg_auto_failover  |
| pgcrypto                     | 1.3             | cryptographic functions  |
| pgrowlocks                   | 1.2             | show row-level locking information  |
| pgstattuple                  | 1.5             | show tuple-level statistics  |
| plperl                       | 1.0             | PL/Perl procedural language  |
| plperlu                      | 1.0             | PL/PerlU untrusted procedural language  |
| plpgsql                      | 1.0             | PL/pgSQL procedural language  |
| plpython3u                   | 1.0             | PL/Python3U untrusted procedural language  |
| pltcl                        | 1.0             | PL/Tcl procedural language  |
| pltclu                       | 1.0             | PL/TclU untrusted procedural language  |
| postgis                      | 3.3.1           | PostGIS geometry and geography spatial types and functions  |
| postgis_raster               | 3.3.1           | PostGIS raster types and functions  |
| postgis_tiger_geocoder       | 3.3.1           | PostGIS tiger geocoder and reverse geocoder  |
| postgis_topology             | 3.3.1           | PostGIS topology spatial types and functions  |
| postgres_fdw                 | 1.1             | foreign-data wrapper for remote PostgreSQL servers  |
| refint                       | 1.0             | functions for implementing referential integrity (obsolete)  |
| seg                          | 1.4             | data type for representing line segments or floating-point intervals  |
| sslinfo                      | 1.2             | information about SSL certificates  |
| tablefunc                    | 1.0             | functions that manipulate whole tables, including crosstab  |
| tcn                          | 1.0             | Triggered change notifications  |
| tsm_system_rows              | 1.0             | TABLESAMPLE method which accepts number of rows as a limit  |
| tsm_system_time              | 1.0             | TABLESAMPLE method which accepts time in milliseconds as a limit  |
| unaccent                     | 1.1             | text search dictionary that removes accents  |
| uuid-ossp                    | 1.1             | generate universally unique identifiers (UUIDs)  |
| xml2                         | 1.1             | XPath querying and XSLT  |

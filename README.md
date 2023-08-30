### SQLite の準備

```
sqlite3 sample.sqlite3

create table articles(id integer primary key autoincrement, title text, content text, published boolean);
insert into articles (title, content, published) values('sample title', 'sample content', false);
```

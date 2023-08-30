### SQLite の準備

```
sqlite3 sample.sqlite3

create table articles(id integer primary key autoincrement, title text, content text, published int not null);
insert into articles (title, content, published) values('sample title', 'sample content', 0);
```

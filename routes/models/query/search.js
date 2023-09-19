const search = (data) => {
  let field = data.category;
  let search = data.search;
  let o_search = data.o_search;
  let o_category = data.o_category;
  let s_search = data.s_search;
  let scope = data.scope;
  console.log(scope)
  console.log(field + '-querysearch');
  console.log(search + '-querysearch');
  console.log(o_search + '-querysearch');
  console.log(o_category + '-querysearch');
  console.log(s_search + '-querysearch');
  if (!!field && !!search) {
    if (field === 'title') {
      field = field + '.korean';
      const result = {
        index: 'practice1',
        body: {
          from: 0,
          size: scope,
          _source: {
            excludes: 'content',
          },
          aggs: {
            category: {
              terms: {
                field: 'category.keyword',
              },
            },
          },
          query: {
            bool: {
              must: {
                match: {
                  [field]: search,
                },
              },
            },
          },
          highlight: {
            number_of_fragments: 1,
            fragment_size: 30,
            pre_tags: ['<mark>'],
            post_tags: ['</mark>'],
            fields: {
              [field]: {},
            },
          },
        },
      };
      console.log(field);
      console.log(result + `true1`);
      return result;
    } else {
      const result = {
        index: 'practice1',
        body: {
          from: 0,
          size: scope,
          aggs: {
            category: {
              terms: {
                field: 'category.keyword',
              },
            },
          },
          query: {
            bool: {
              must: {
                match: {
                  [field]: search,
                },
              },
            },
          },
          highlight: {
            number_of_fragments: 1,
            fragment_size: 30,
            pre_tags: ['<mark>'],
            post_tags: ['</mark>'],
            fields: {
              [field]: {},
            },
          },
        },
      };
      console.log(field);
      console.log(result + `true2`);
      return result;
    }
  } else if (field === '') {
    const result = {
      index: 'practice1',
      body: {
        from: 0,
        size: scope,
        _source: {
          excludes: 'content',
        },
        aggs: {
          category: {
            terms: {
              field: 'category.keyword',
            },
          },
        },
        query: {
          bool: {
            must: [
              {
                multi_match: {
                  query: search,
                  type: 'most_fields',
                  fields: [
                    'category',
                    'reporter',
                    'title.korean',
                    // 'content.korean',
                  ],
                },
              },
            ],
          },
        },
        highlight: {
          number_of_fragments: 1,
          fragment_size: 30,
          pre_tags: ['<mark>'],
          post_tags: ['</mark>'],
          fields: {
            // 입력 순서대로 배열 배치
            reporter: {},
            'title.korean': {},
            'category.korean': {},
          },
        },
      },
    };
    console.log(field);
    // console.log(result.body.query.bool.should);
    console.log(result + `false`);
    return result;
  } else if (field == undefined || search == undefined) {
    console.log(o_search + '-querysearch');
    console.log(o_category + '-querysearch');
    console.log(s_search + '-querysearch');
    const result = {
      index: 'practice1',
      body: {
        from: 0,
        size: scope,
        _source: {
          excludes: 'content',
        },
        aggs: {
          category: {
            terms: {
              field: 'category.keyword',
            },
          },
        },
        query: {
          bool: {
            must: [
              {
                multi_match: {
                  query: o_search,
                  fields: [
                    'title.korean',
                    'reporter.korean',
                    'category.korean',
                  ],
                },
              },
              {
                bool: {
                  should: [
                    {
                      bool: {
                        must: [
                          {
                            term: {
                              'title.korean': {
                                value: s_search,
                              },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        highlight: {
          number_of_fragments: 1,
          fragment_size: 30,
          pre_tags: ['<mark>'],
          post_tags: ['</mark>'],
          fields: {
            // 입력 순서대로 배열 배치
            reporter: {},
            'title.korean': {},
            'category.korean': {},
          },
        },
      },
    };
    console.log(o_category);
    console.log(result + `third`);
    return result;
  } else {

  }
};
module.exports = search;

`#name_1:contains(${search})`;

"#name_1:contains('" + search + "')";

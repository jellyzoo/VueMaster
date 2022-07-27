module.exports = {
  // database의 data query로 가져오기
  productList: {
    //제품 리스트가 있는 메인화면 쿼리.
    query: `select t1.*, t2.path, t3.category1, t3.category2, t3.category3 
    from t_product t1, t_image t2, t_category t3
    where t1.id = t2.product_id and t2.type = 1 and t1.category_id = t3.id`
  },
  productList2: {
    //세일즈 리스트에 제품 등록할 데이터 가져오는 쿼리
    query: `select t3.*, t4.path from (select t1.*, t2.category1, t2.category2, t2.category3 
      from t_product t1, t_category t2
      where t1.category_id = t2.id) t3
      left join (select * from t_image where type=1) t4
      on t3.id = t4.product_id`
  },
  productDetail: {
    //제품 상세페이지 쿼리

    query: `select t1.*, t2.path, t3.category1, t3.category2, t3.category3 
        from t_product t1, t_image t2, t_category t3
        where t1.id = ? and t1.id = t2.product_id and t2.type = 3 and t1.category_id = t3.id`
  },

  productMainImages: {
    //타입이 2인 해당 id를 가진 이미지를 가져오는 쿼리
    query: `select * from t_image where product_id = ? and type = 2`
  },
  productInsert: {
    //받아온 파라미터들을 t_product에 insert하는 쿼리
    query: `insert into t_product set ?`
  },
  productImageInsert: {
    //받아온 파라미터들을 t_image에 insert하는 쿼리
    query: `insert into t_image set ?`
  },

  imageList: {
    //해당 id를 가진 이미지를 가져오는 퀄리
    query: `select * from t_image where product_id=?`
  },
  imageDelete: {
    //해당 id를 가진 이미지를 삭제하는 쿼리
    query: `delete from t_image where id=?`
  },
  productDelete: {
    //해당 id를 가진 상품을 삭제하는 쿼리
    query: `delete from t_product where id=?`
  },
  categoryList: {
    //카테고리 리스트 가져오는 쿼리
    query: `select * from t_category`
  },
  sellerList: {
    //셀러 리스트 가져오는 쿼리
    query: `select * from t_seller`
  },
  memberJoin: {
    //유저 회원가입을 위한 동일한 email이 있는지 찾는 쿼리
    query: `SELECT email FROM t_user WHERE email = ?`,
  },
  signUp: {
    //카카오 로그인시 해당 정보를 insert하는 쿼리
    query: `insert into t_user set ? on duplicate key update ?`
  }

};
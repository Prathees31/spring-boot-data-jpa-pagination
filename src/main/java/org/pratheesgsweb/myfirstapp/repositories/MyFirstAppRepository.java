package org.pratheesgsweb.myfirstapp.repositories;
import java.util.List;


import org.pratheesgsweb.myfirstapp.models.MyFirstAppModels;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MyFirstAppRepository extends JpaRepository<MyFirstAppModels, String> {
	Page<MyFirstAppModels> findBytype(String type,Pageable pageable);
	List<MyFirstAppModels> findDistinctBytype(String type);
	@Query("select distinct type from MyFirstAppModels")
	List<String> findDistBytype();
	/*@Query("select count(*) from MyFirstAppModels")
	List<String> findAllCount();*/
	Page<MyFirstAppModels> findByPriceNewBetween(Integer start, Integer end,Pageable Pageable);
}


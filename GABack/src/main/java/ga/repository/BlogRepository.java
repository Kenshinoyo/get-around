package ga.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ga.model.BlogEntry;


@Repository
public interface BlogRepository extends JpaRepository<BlogEntry, Integer>{

	List<BlogEntry> findByUserName(String userName);
}

package com.metapop.backend.repository;

import com.metapop.backend.entity.User;
import com.metapop.backend.entity.UserCustomizing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCustomizingRepository extends JpaRepository<UserCustomizing, Long> {
    UserCustomizing findByPlayer(User player);
}

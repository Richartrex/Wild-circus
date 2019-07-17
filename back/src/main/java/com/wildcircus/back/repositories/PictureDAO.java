package com.wildcircus.back.repositories;

import com.wildcircus.back.entities.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureDAO extends JpaRepository<Picture, Long> {
}

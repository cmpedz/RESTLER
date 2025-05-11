package authstream.domain.entities;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "admins")
@Getter
@Setter
@NoArgsConstructor

@ToString
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID) 
    @Column(name = "id")
    private UUID id;

    @Column(name = "username", nullable = false) 
    private String username;

    @Column(name = "password", nullable = false) 
    private String password;

    @Column(name = "uri") 
    private String uri;


    @Column(name = "database_username", nullable = false)
    private String databaseUsername;

    @Column(name = "database_password", nullable = false)
    private String databasePassword;

    @Enumerated(EnumType.STRING)
    @Column(name = "database_type", nullable = false) 
    private DatabaseType databaseType;

    @Column(name = "host", nullable = false)
    private String host;
    @Column(name = "port", nullable = false)
    private Integer port;

    @Enumerated(EnumType.STRING)
    @Column(name = "ssl_mode") 
    private SSL_Mode sslMode;

    @Column(name = "connection_string", columnDefinition = "TEXT")
    private String connectionString;

    @Column(name = "table_include_list",nullable= true, columnDefinition = "TEXT")   // "["table1", "table2", ...]" 
    private String tableIncludeList;

    @Column(name = "schema_include_list",nullable= true, columnDefinition = "TEXT")    // "["table1", "table2", ...]" 
    private String schemaIncludeList;

    @Column(name = "collection_include_list" ,nullable= true, columnDefinition = "TEXT")  // "["table1", "table2", ...]" 
    private String collectionIncludeList;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt = LocalDateTime.now();

    
}
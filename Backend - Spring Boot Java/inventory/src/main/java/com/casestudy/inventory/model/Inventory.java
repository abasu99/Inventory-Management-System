package com.casestudy.inventory.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "inventory")
public class Inventory {

    //@Indexed(direction = IndexDirection.ASCENDING,unique = true)
    //@Field(name="Id",write = Field.Write.NON_NULL)

    @Transient
    public static final String SEQUENCE_NAME = "inventory_sequence";


    @Id private int id;

    private int locationNbr;
    private String materialId;
    private int resetQty;
    private int orderQty;
    private int availableQuantity;

    //@Field(name = "UpdateDateTime",write = Field.Write.NON_NULL)
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy'T'HH:MM:ss")
//   @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm")
    private String updateDateTime;

}

<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:catns="task1ns"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>

            <body>
                <h1>Cats</h1>
                <ul class="gallery">
                    <xsl:for-each select="catns:cats/catns:cat">
                        <li>
                            <img class="not-selected">
                                <xsl:attribute name="src">
                                    <xsl:value-of select="catns:url"/>
                                </xsl:attribute>

                                <xsl:attribute name="title">
                                    <xsl:value-of select="catns:name"/>
                                </xsl:attribute>

                                <xsl:attribute name="alt">
                                    <xsl:value-of select="catns:alt"/>
                                </xsl:attribute>
                            </img>
                        </li>
                    </xsl:for-each>
                </ul>

                <button type="button" id="leftBtn">&lt;</button>
                <button type="button" id="rightBtn">&gt;</button>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
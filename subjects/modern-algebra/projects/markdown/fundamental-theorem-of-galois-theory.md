# Fundamental Theorem of Galois Theory

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** MA-04  
**Level:** Advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a finite Galois extension $L/K$ with group $G$, prove an inclusion-reversing bijection between intermediate fields $E$ and subgroups $H\le G$, via $E\mapsto\operatorname{Gal}(L/E)$ and $H\mapsto L^H$. Prove $[L:L^H]=|H|$ and normal subgroups correspond to intermediate extensions Galois over K, with quotient group $G/H$.

**Foundations and permitted imports:**

L/K is a finite normal separable extension, G=Aut_K(L). Import: (i) finite Galois extensions have automorphism count equal to degree; (ii) Artin’s fixed-field theorem, for a finite automorphism subgroupH, [L:L^H]=|H| and L/L^H is Galois; (iii) the tower law; (iv) embeddings of an intermediate field into an algebraic closure extend toL, and K-normality sendsL to itself. These are substantive field-theory imports, not the correspondence being proved.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Field-to-group recovery
N2 [v1] Group-to-field recovery
  N1 -- E1: The field recovered from its fixing subgroup is exactlyE. --> N2
N3 [v1] Normal subgroups and normal fields
  N1 -- E1: The field recovered from its fixing subgroup is exactlyE. --> N3
  N2 -- E2: Both inverse identities and the degree formula[L:L^H]=|H|. --> N3
N4 [v1] Restriction quotient
  N3 -- E3: H normal inG iff its fixed field is Galois overK. --> N4
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | The field recovered from its fixing subgroup is exactlyE. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T1-3 | N1/v1, E1 | The field recovered from its fixing subgroup is exactlyE. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | Both inverse identities and the degree formula[L:L^H]=|H|. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |
| T3-4 | N3/v1, E3 | H normal inG iff its fixed field is Galois overK. | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N3 |

## 3. Node roles and faculty activities

### N1/v1 — Field-to-group recovery

**Object, role, and local target:** Compare degrees after forming its fixing subgroup. The required export is: The field recovered from its fixing subgroup is exactlyE.

**Inputs:** Intermediate K⊂E⊂L; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-04.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Intermediate K⊂E⊂L; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Compare degrees after forming its fixing subgroup. |
| Sense | Inclusion alone is not enough; degree equality closes recovery. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** The field recovered from its fixing subgroup is exactlyE. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Group-to-field recovery

**Object, role, and local target:** Compare the group sizes supplied by Artin. The required export is: Both inverse identities and the degree formula[L:L^H]=|H|.

**Inputs:** SubgroupH≤G; E_H=L^H; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-04.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain SubgroupH≤G; E_H=L^H; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Compare the group sizes supplied by Artin. |
| Sense | Fixing all ofE is stronger than preservingE as a set. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** Both inverse identities and the degree formula[L:L^H]=|H|. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Normal subgroups and normal fields

**Object, role, and local target:** Translate conjugation to stability of the fixed field. The required export is: H normal inG iff its fixed field is Galois overK.

**Inputs:** Correspondence and extension of embeddings; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-04.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Correspondence and extension of embeddings; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Translate conjugation to stability of the fixed field. |
| Sense | All embeddings, not just a few automorphisms, must be controlled. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** H normal inG iff its fixed field is Galois overK. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

### N4/v1 — Restriction quotient

**Object, role, and local target:** Check surjectivity using embedding extension. The required export is: The normal-field quotient identification G/H≅Gal(E/K).

**Inputs:** NormalH and E=L^H; prior exports E3/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-04.N4`; publish E4 only after the stated local target is established. |
| Memory | Retain NormalH and E=L^H; prior exports E3/v1; keep their assumptions and versions attached. |
| Intellect | Check surjectivity using embedding extension. |
| Sense | Without normality restriction need not land inAut_K(E). |
| Action | Execute the numbered mathematical activities in §4.N4, including its displayed identities and logical implications. |

**Export E4/v1:** The normal-field quotient identification G/H≅Gal(E/K). Evidence is the authored argument in §4.N4, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N4 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E4, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E4. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Field-to-group recovery

1. L/E remains normal and separable: L is a splitting field overK of separable polynomials and hence also a splitting field of those polynomials overE.

2. Set H_E=Aut_E(L); the automorphism-count import gives|H_E|=[L:E].

3. Certainly E⊂L^{H_E}.

4. Artin gives[L:L^{H_E}]=|H_E|=[L:E].

5. The tower law then forces[L^{H_E}:E]=1, soL^{H_E}=E.

### §4.N2 — Group-to-field recovery

1. H fixesE_H pointwise, so H⊂Aut_{E_H}(L).

2. Artin saysL/E_H is Galois and its degree is|H|.

3. Thus its full automorphism group has|H| elements and equalsH.

4. The two constructions are therefore mutual inverses.

5. If E₁⊂E₂ then every automorphism fixingE₂ fixesE₁, soH_{E₂}⊂H_{E₁}; ifH₁⊂H₂ thenL^{H₂}⊂L^{H₁}.

6. This proves the inclusion-reversing bijection.

### §4.N3 — Normal subgroups and normal fields

1. Forσ∈G, the fixing subgroup of σ(E) is σH_Eσ⁻¹, so the correspondence makesH_E normal exactly whenσ(E)=E for everyσ.

2. If E/K is normal, each suchσ preservesE.

3. Conversely everyK-embedding ofE extends to aK-embedding ofL and thus to an element ofG; stability then makes all conjugates ofE equalE, proving normality.

4. Separability descends fromL/K, so this is precisely the Galois condition onE/K.

### §4.N4 — Restriction quotient

1. Restriction res:G→Aut_K(E) is defined becauseE is stable.

2. Its kernel consists exactly of automorphisms fixingE, namelyH.

3. AnyK-automorphism ofE extends toL; normality ofL/K makes the extension an element ofG, so res is onto.

4. By MA-02, G/H≅Aut_K(E)=Gal(E/K).

5. This closes the entire theorem.

## 5. Worked instance and boundary audit

Let L=Q(√2,√3), K=Q. The four sign changes formC₂×C₂. The subgroup fixing√2 consists of the identity and the change√3↦−√3; its fixed field isQ(√2), and[L:Q(√2)]=2=|H|. All subgroups are normal and the restriction quotient has order2.

**Boundary or failed-argument audit:**

Q(∛2)/Q is not normal: its nonreal conjugate roots are absent and itsQ-automorphism group is trivial. Its fixed field under that trivial group is the whole extension, notQ. Sense blocks using this extension in the finite Galois correspondence.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `MA-04`, version 1, and the proof with every reuse. Intermediate exports E1–E4 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [MIT Algebra II notes: field extensions and Galois theory](https://ocw.mit.edu/courses/res-18-012-algebra-ii-student-notes-spring-2022/pages/student-notes/).

[Branch index](../README.md)
